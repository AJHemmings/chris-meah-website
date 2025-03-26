import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints with /api prefix
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body using the Zod schema
      const validatedData = insertContactSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      // Store the contact submission
      const contactSubmission = await storage.createContactSubmission(validatedData.data);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Contact submission received", 
        id: contactSubmission.id 
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to process your request. Please try again later." 
      });
    }
  });

  // Get all contact submissions - admin only
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error retrieving contact submissions:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions." 
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
