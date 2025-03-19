
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    shape?: "circle" | "square" | "hexagon"
  }
>(({ className, shape = "circle", ...props }, ref) => {
  if (shape === "hexagon") {
    return (
      <div
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden",
          className
        )}
        ref={ref as any}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon 
            points="25,0 75,0 100,50 75,100 25,100 0,50" 
            fill="white"
            stroke="#E6B325"
            strokeWidth="5"
          />
        </svg>
        <AvatarPrimitive.Root
          className="absolute inset-0 flex justify-center items-center"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
  
  const shapeClass = shape === "square" ? "rounded-md" : "rounded-full";
                     
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden",
        shapeClass,
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
