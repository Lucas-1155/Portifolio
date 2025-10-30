"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione sua lógica de envio aqui
    alert("Envio do formulario ainda em desenvolvimento 😁");
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Entre em contato comigo para discutir projetos, colaborar ou simplesmente para falar sobre tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/outlook.png"
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Outlook</h3>
                  <p className="text-sm text-muted-foreground">
                    lucasdev1155@outlook.com
                  </p>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-sm text-muted-foreground">
                    +55 (81) 98960-6615
                  </p>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-sm text-muted-foreground">
                    {""}
                    Olinda, Brasil
                  </p>
                </div>
              </Card>
            </div>

            <Card className="lg:col-span-2 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escreva sua mensagem..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2025 Lucas Soares de França. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}
