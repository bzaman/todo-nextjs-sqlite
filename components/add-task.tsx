"use client";

import { KeyboardEvent, ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { createTask } from "@/actions/create-task";

type Props = {
  className: string;
  isImportant?: boolean;
  isMyDay?: boolean;
}

export default function AddTask({ className, isImportant, isMyDay }: Props) {
  // const { className, isImportant, isMyDay } = props;
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");

  async function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      // const data: CreateTaskSchema = {
      //   title: title,
      //   isImportant: isImportant ? true : false,
      // };
      // if (isMyDay) {
      //   data.addedToMyDayAt = new Date().toISOString();
      // }
      const data = {
        title: title,
        isImportant: isImportant
      }
      await createTask(data);
      setTitle("");
    }
  }

  return (
    <div>
      {isAdding ? (
        <Input
          type="text"
          name="title"
          placeholder="Try adding pay utilities by Friday 6pm"
          onKeyDown={handleKeyDown}
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          onBlur={() => setIsAdding(false)}
        />
      ) : (
        <Button className={className} onClick={() => setIsAdding(true)}>
          <PlusIcon /> Add Task
        </Button>
      )}
    </div>
  );
}
