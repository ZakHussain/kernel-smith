import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistDialog = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    interests: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      toast({
        title: "Success!",
        description:
          "You've been added to the waitlist. We'll be in touch soon!",
        duration: 5000,
      });

      setOpen(false);
      setFormData({
        email: "",
        name: "",
        role: "",
        interests: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
        >
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-amber-500">
            Join the KernelSmith Waitlist
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Get early access to our hardware optimization toolkit.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="bg-zinc-800 border-zinc-700 text-white"
              required
              disabled={isLoading}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Name</label>
            <Input
              type="text"
              placeholder="Your name"
              className="bg-zinc-800 border-zinc-700 text-white"
              required
              disabled={isLoading}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Role</label>
            <Input
              type="text"
              placeholder="e.g., ML Engineer, Hardware Developer"
              className="bg-zinc-800 border-zinc-700 text-white"
              disabled={isLoading}
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              What interests you most about KernelSmith?
            </label>
            <Input
              type="text"
              placeholder="e.g., Hardware optimization, ML deployment"
              className="bg-zinc-800 border-zinc-700 text-white"
              disabled={isLoading}
              value={formData.interests}
              onChange={(e) =>
                setFormData({ ...formData, interests: e.target.value })
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-amber-500 text-black hover:bg-amber-600"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
