import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { tasks } from "@/lib/schema";

import AddTask from "@/components/add-task";
import TaskList from "@/components/task-list";
import TaskListCompleted from "@/components/task-list-completed";

export default async function page() {
  const session = await auth();

  const res = await db.query.tasks.findMany({
    where: and(
      eq(tasks.userId, session?.user.id!),
      eq(tasks.isComplete, false)
    ),
  });

  const resCompleted = await db.query.tasks.findMany({
    where: and(eq(tasks.userId, session?.user.id!), eq(tasks.isComplete, true)),
  });

  return (
    <div className="flex flex-col text-accent-blue-foreground p-4 gap-5">
      <h2 className="font-bold text-3xl">Task</h2>
      {res.length > 0 ? (
        <div>
          <TaskList tasks={res} accentClassName="text-accent-blue-foreground" />
        </div>
      ) : (
        <div>
          Show up here if they are not part of any lists you have created
        </div>
      )}
      <div>
        <TaskListCompleted tasks={resCompleted} />
      </div>
      <div>
        <AddTask className="text-accent-blue-foreground bg-accent hover:bg-accent/50 gap-1" />
      </div>
    </div>
  );
}
