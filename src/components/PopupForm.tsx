import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  websiteUrl: z.string().url("Valid website URL required"),
  monthlyAdSpend: z.string().min(1, "Please select ad spend range"),
  currentRoas: z.string().min(1, "Please select current ROAS"),
});

interface PopupFormData {
  name: string;
  phone: string;
  email: string;
  websiteUrl: string;
  monthlyAdSpend: string;
  currentRoas: string;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PopupFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: PopupFormData) => {
    console.log("Form submitted:", data);
    alert("Thank you! We will contact you within 12 hours to schedule your free growth strategy call.");
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md mx-auto shadow-2xl border-2 border-primary/20 max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-muted transition-colors"
          >
            <X size={20} />
          </button>
          <CardTitle className="text-xl md:text-2xl font-bold text-center pr-8">
            Book Your Free Growth Strategy Call
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm md:text-base">
            Get a custom growth plan for your ecommerce business
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                {...register("name")} 
                className="border-primary/20 focus:border-primary"
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                placeholder="+91 98765 43210" 
                {...register("phone")} 
                className="border-primary/20 focus:border-primary"
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@yourbrand.com" 
                {...register("email")} 
                className="border-primary/20 focus:border-primary"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website URL *</Label>
              <Input 
                id="websiteUrl" 
                placeholder="https://yourbrand.com" 
                {...register("websiteUrl")} 
                className="border-primary/20 focus:border-primary"
              />
              {errors.websiteUrl && <p className="text-xs text-destructive">{errors.websiteUrl.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monthlyAdSpend">Monthly Ad Spend *</Label>
              <select 
                id="monthlyAdSpend" 
                className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                {...register("monthlyAdSpend")}
              >
                <option value="">Select Range</option>
                <option value="0-50k">Under ₹50,000</option>
                <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                <option value="100k-200k">₹1,00,000 - ₹2,00,000</option>
                <option value="200k-500k">₹2,00,000 - ₹5,00,000</option>
                <option value="500k+">₹5,00,000+</option>
              </select>
              {errors.monthlyAdSpend && <p className="text-xs text-destructive">{errors.monthlyAdSpend.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currentRoas">Current ROAS (Return On Ad Spend) *</Label>
              <select 
                id="currentRoas" 
                className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                {...register("currentRoas")}
              >
                <option value="">Select Current ROAS</option>
                <option value="below-1x">Below 1x (Losing Money)</option>
                <option value="1x-2x">1x - 2x (Breaking Even)</option>
                <option value="2x-3x">2x - 3x (Profitable)</option>
                <option value="3x-4x">3x - 4x (Good Profit)</option>
                <option value="4x+">4x+ (Excellent)</option>
                <option value="not-sure">Not Sure / Don't Track</option>
              </select>
              {errors.currentRoas && <p className="text-xs text-destructive">{errors.currentRoas.message}</p>}
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-4 md:py-6 text-sm md:text-base lg:text-lg bg-primary hover:bg-primary/90 text-primary-foreground px-4"
              size="lg"
            >
              <span className="text-center leading-tight">Book My Free Growth Strategy Call</span>
            </Button>
            
            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
              ✓ Free Call ✓ No Obligation ✓ Usually Respond in 12 Hours
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopupForm;