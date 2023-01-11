import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ValidationError } from "../errors/ValidationError";

export class CreateUserController {
  constructor(private service: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const { email, password, role } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).end();
    }

    if (!password || typeof password !== 'string') {
      return res.status(400).end();
    }

    if (!role || typeof role !== 'string') {
      return res.status(400).end();
    }

    try {
      const { id } = await this.service.create(email, password, role);

      return res.status(201).json({ id });
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json(error.message);
      }

      return res.status(500).end();
    }
  }
}