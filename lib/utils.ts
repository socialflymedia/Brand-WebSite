import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
// adding comment to host
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
