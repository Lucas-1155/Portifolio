"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <Image
            src="/lucas.jpeg"
            alt="Foguete espacial do portfólio"
            width={140}
            height={140}
            className="rounded-full mx-auto mb-2 object-cover"
          />
            <p className="text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-wider">
              Olá, eu sou Lucas Soares
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Desenvolvedor
              <span className="block text-primary">Full Stack</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Criando experiências digitais excepcionais com código limpo e
              design intuitivo. Especializado em React, Node.js e tecnologias
              modernas.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Button size="lg" asChild>
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Lucas-1155"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/lucas1155/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:seu@email.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <a href="#about" aria-label="Scroll para baixo">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
