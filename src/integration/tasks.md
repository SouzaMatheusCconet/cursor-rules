Titulo da atividade: Implementar handler de mensagens de integração
-- Descição da Atividade
--- Implementar endpoint para receber mensagens externas e enfileirar/processar.
---- Sub Atividades
----- Criar DTO de message
----- Implementar IntegrationService para processar mensagens
----- Adicionar integração com worker-pool (Bull/BullMQ)
----- Adicionar testes

Prompt para IA:
"Implemente um módulo NestJS autocontido chamado 'integration' com endpoint POST /integration/message que aceita uma mensagem via DTO, valida e encaminha para um worker (BullMQ). Inclua testes básicos."
