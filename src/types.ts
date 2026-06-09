/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DiferencialItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  feedback: string;
  stars: number;
}

export interface ProjectType {
  id: string;
  name: string;
  priceEstimate: string;
  description: string;
  icon: string;
}

export interface ProjectAddon {
  id: string;
  name: string;
  description: string;
  multiplier: number;
  fixedPrice: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
