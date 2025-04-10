CREATE TABLE "app_config" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "app_config_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"config" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
