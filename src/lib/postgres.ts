import postgres from "postgres";

const DATABASE_NAME = "shortlinks";

export const sql = postgres(
	`postgres://docker:docker@localhost:5432/${DATABASE_NAME}`
);
