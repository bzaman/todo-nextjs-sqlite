"use client";

import { ChangeEvent } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StarFilledIcon, StarIcon, SunIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { Task } from "@/types/task";
import { cn } from "@/lib/utils";
import { completeTask } from "@/actions/complete-task";
import { updateTask } from "@/actions/update-task";

type Props = {
  tasks: Task[];
  accentClassName: string;
};

export default function taskList({ tasks, accentClassName }: Props) {

  // toggle the checkbox on each
  async function checkTask(task: Task) {
    await completeTask(task.id, !task.isComplete);
  }

  // update the title
  async function updateTitle(task: Task, title: string) {
    const data = {
      title: title,
    };
    await updateTask(task.id, data);
  }

  async function updateNote(task: Task, note: string) {
    const data = {
      note: note,
    };
    await updateTask(task.id, data);
  }

  async function toggleImportant(task: Task) {
    const data = {
      isImportant: !task.isImportant,
    };
    await updateTask(task.id, data);
  }

  async function handleRemoveFromMyDay(task:Task) {
    const data = {
      addToMyDayAt: null
    };
    await updateTask(task.id, data);
  }

  async function handleAddToMyDay(task:Task) {
    const data = {
      addToMyDayAt: new Date().toISOString()
    };
    await updateTask(task.id, data);
  }



  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-accent rounded text-foreground px-2 py-3 flex items-center gap-2 leading-5"
        >
          <div className="h-[17px]">
            <Checkbox
              checked={task.isComplete ? true : false}
              onClick={() => checkTask(task)}
            />
          </div>

          <div className="flex-auto">
            <Drawer>
              <DrawerTrigger
                className={cn({
                  "w-full text-left": true,
                  "line-through text-muted-foreground": task.isComplete,
                })}
              >
                {task.title}
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-center">Edit task</DrawerTitle>
                </DrawerHeader>
                <div className="mx-auto w-full max-w-xl flex flex-col p-5 gap-5">
                  <Input
                    type="text"
                    name="title"
                    defaultValue={task.title ?? ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateTitle(task, e.target.value)
                    }
                  />

                  <Textarea
                    placeholder="Add note"
                    name="note"
                    defaultValue={task.note ?? ""}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      updateNote(task, e.target.value)
                    }
                  />
                  {task.addToMyDayAt && task.addToMyDayAt > format(new Date(), 'yyyy-MM-dd') ? (
                    <Button
                      onClick={()=> handleRemoveFromMyDay(task)}
                      className={cn(
                        "bg-accent hover:bg-accent/50 gap-2",
                        accentClassName
                      )}
                    >
                      <SunIcon className="w-5 h-5" /> Remove from my day
                    </Button>
                  ) : (
                    <Button
                      onClick={()=> handleAddToMyDay(task)}
                      className={cn(
                        "bg-accent hover:bg-accent/50 gap-2",
                        accentClassName
                      )}
                    >
                      <SunIcon className="w-5 h-5" /> Add to my day
                    </Button>
                  )}
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <Button
            variant="ghost"
            onClick={() => toggleImportant(task)}
            className={cn(accentClassName, `hover:${accentClassName}`)}
          >
            {task.isImportant ? (
              <StarFilledIcon className="w-6 h-6" />
            ) : (
              <StarIcon className="w-6 h-6" />
            )}
          </Button>
        </div>
      ))}
    </div>
  );
}
