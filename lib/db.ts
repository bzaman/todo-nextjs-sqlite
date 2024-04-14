import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "@/lib/schema";
import config from "./config";

const sqlite = new Database(config.DATABASE_URL);
export const db = drizzle(sqlite, { schema, logger: true});


