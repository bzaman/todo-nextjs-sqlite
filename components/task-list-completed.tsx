"use client";

import { useState } from "react";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import TaskList from "@/components/task-list";

type Props = {
  tasks: Task[];
};

export default function TaskListCompleted({ tasks }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div className="flex flex-col gap-5">
          <div>
            <Button
              // variant="ghost"
              onClick={() => setOpen(!open)}
              className="text-accent-blue-foreground bg-accent hover:bg-accent/50 gap-1"
            >
              <ChevronDownIcon /> Completed
            </Button>
          </div>
          <TaskList tasks={tasks} />
        </div>
      ) : (
        <div>
          <Button
            // variant="ghost"
            onClick={() => setOpen(!open)}
            className="text-accent-blue-foreground bg-accent hover:bg-accent/50 gap-1"
          >
            <ChevronRightIcon /> Completed
          </Button>
        </div>
      )}
    </div>
  );
}
