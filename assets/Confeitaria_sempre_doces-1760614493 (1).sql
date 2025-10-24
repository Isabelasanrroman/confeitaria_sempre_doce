CREATE TABLE IF NOT EXISTS "usuarios" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(150) NOT NULL,
	"email" bigint NOT NULL UNIQUE,
	"senha" varchar(20) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "sabores_bolos" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(50) NOT NULL,
	"descricao" varchar(255) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "bolos" (
	"id" serial NOT NULL UNIQUE,
	"nome" varchar(100) NOT NULL,
	"preco" numeric(10,0) NOT NULL,
	"peso" bigint NOT NULL,
	"qtd_pessoas" bigint NOT NULL,
	"sabor_id" bigint NOT NULL,
	"usuario_id" bigint NOT NULL,
	"foto" bigint NOT NULL,
	"foto_caminho" varchar(100) NOT NULL,
	PRIMARY KEY ("id")
);



ALTER TABLE "bolos" ADD CONSTRAINT "bolos_fk5" FOREIGN KEY ("sabor_id") REFERENCES "sabores_bolos"("id");

ALTER TABLE "bolos" ADD CONSTRAINT "bolos_fk6" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id");