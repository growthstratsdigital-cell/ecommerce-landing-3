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
  phoneNumber: z.string().min(10, "Enter a valid phone number").max(15),
  email: z.string().email("Valid email required"),
  websiteUrl: z.string().url("Website is required"),
  monthlyAdBudget: z.string().min("Please select ad budget range"),
  packageInterest: z.string().min(1, "Please select package"),
});

interface PopupFormData {
  name: string;
  phoneNumber: string;
  email: string;
  websiteUrl: string;
  monthlyAdBudget: string;
  packageInterest: string;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PopupFormData>({
    resolver: zodResolver(formSchema),
  });

const onSubmit = async (data: FormData) => {
  try {
    console.log("FORM DATA:", data);

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          website_url: data.websiteUrl,
          monthly_revenue: data.monthlyRevenue,
          package_interest: data.packageInterest
        }
      ]);

    if (error) {
      throw error;
    }

    alert("Thank you! We'll contact you shortly.");

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

    if (!response.ok) {
      throw new Error("Failed to submit");
    }

    alert("Thank you! We'll contact you shortly.");
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
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
  <Label htmlFor="phoneNumber">Phone Number</Label>

  <Input
    id="phoneNumber"
    type="tel"
    placeholder="9876543210"
    {...register("phoneNumber")}
  />

  {errors.phoneNumber && (
    <p className="text-xs text-destructive">
      {errors.phoneNumber.message}
    </p>
  )}
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
                type="text"
                placeholder="https://yourbrand.com" 
                {...register("websiteUrl")} 
                className="border-primary/20 focus:border-primary"
              />
              {errors.websiteUrl && <p className="text-xs text-destructive">{errors.websiteUrl.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monthlyAdBudget">Monthly Ad Budget *</Label>
              <select 
                id="monthlyAdBudget" 
                className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                {...register("monthlyAdBudget")}
              >
                <option value="">Select Range</option>
                <option value="0-50k">Under ₹50,000</option>
                <option value="50k-100k">₹50,000 - ₹2,00,000</option>
                <option value="200k-500k">₹2,00,000 - ₹5,00,000</option>
                <option value="500k+">₹5,00,000+</option>
              </select>
              {errors.monthlyAdBudget && <p className="text-xs text-destructive">{errors.monthlyAdBudget.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="packageInterest">Which growth package fits your current stage? *</Label>
              <select 
                id="packageInterest" 
                className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                {...register("packageInterest")}
              >
                <option value="">Select Package</option>
                <option value="Basic">Basic (₹30,000/Month)</option>
                <option value="Premium">Premium (₹60,000/Month)</option>
                <option value="Super Premium">Super Premium (₹1,00,000/Month)</option>
              </select>
              {errors.packageInterest && <p className="text-xs text-destructive">{errors.packageInterest.message}</p>}
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
