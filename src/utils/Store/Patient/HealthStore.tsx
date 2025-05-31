import { create } from 'zustand';

export interface HealthMetric {
  id: string;
  type: 'steps' | 'calories' | 'water' | 'sleep';
  value: number;
  target: number;
  unit: string;
  percentage: number;
}

export interface Activity {
  month: string;
  water: number;
  steps: number;
  calories: number;
  thisMonth: number;
  lastMonth: number;
}

export interface HealthReport {
  id: string;
  title: string;
  value: number;
  unit: string;
  change: string;
  type: 'improvement' | 'decline';
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  type: 'stretching' | 'training' | 'appointment' | 'meditation';
  duration?: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  date: string;
  type: 'appointment' | 'meeting' | 'session';
}

interface HealthState {
  user: {
    name: string;
    age: number;
    location: string;
    avatar: string;
    bloodType: string;
    height: string;
    weight: string;
  };
  metrics: HealthMetric[];
  activities: Activity[];
  reports: HealthReport[];
  reminders: Reminder[];
  upcomingEvents: UpcomingEvent[];
  currentMonth: string;
  setCurrentMonth: (month: string) => void;
  goalProgress: number;
  sleepHours: {
    value: number;
    subtitle: string;
  };
}

export const useHealthStore = create<HealthState>((set) => ({
  user: {
    name: 'Faith Paul',
    age: 28,
    location: 'New York, USA',
    avatar: '/lovable-uploads/d2f92a44-972e-4136-9629-b1a5ca791978.png',
    bloodType: 'O+',
    height: '165cm',
    weight: '90kg'
  },
  metrics: [
    {
      id: '1',
      type: 'steps',
      value: 202,
      target: 3000,
      unit: 'steps',
      percentage: 6.7
    },
    {
      id: '2',
      type: 'calories',
      value: 408,
      target: 2000,
      unit: 'kcal',
      percentage: 20.4
    },
    {
      id: '3',
      type: 'water',
      value: 87,
      target: 100,
      unit: 'litres',
      percentage: 87
    }
  ],
  activities: [
    { month: 'Jan', water: 20, steps: 45, calories: 30, thisMonth: 25, lastMonth: 20 },
    { month: 'Feb', water: 25, steps: 30, calories: 25, thisMonth: 30, lastMonth: 25 },
    { month: 'Mar', water: 15, steps: 20, calories: 35, thisMonth: 20, lastMonth: 15 },
    { month: 'Apr', water: 30, steps: 25, calories: 20, thisMonth: 25, lastMonth: 30 },
    { month: 'May', water: 20, steps: 35, calories: 30, thisMonth: 35, lastMonth: 20 },
    { month: 'Jun', water: 25, steps: 20, calories: 25, thisMonth: 20, lastMonth: 25 },
    { month: 'Jul', water: 35, steps: 40, calories: 35, thisMonth: 40, lastMonth: 35 },
    { month: 'Aug', water: 30, steps: 25, calories: 30, thisMonth: 25, lastMonth: 30 },
    { month: 'Sep', water: 25, steps: 50, calories: 40, thisMonth: 50, lastMonth: 25 },
    { month: 'Oct', water: 40, steps: 35, calories: 25, thisMonth: 35, lastMonth: 40 }
  ],
  reports: [
    {
      id: '1',
      title: 'Weight loss',
      value: 80,
      unit: '%',
      change: 'decrease',
      type: 'improvement'
    },
    {
      id: '2',
      title: 'General health',
      value: 78,
      unit: '%',
      change: 'gain',
      type: 'improvement'
    }
  ],
  reminders: [
    {
      id: '1',
      title: 'Stretching',
      time: '48min',
      type: 'stretching'
    },
    {
      id: '2',
      title: 'Mind training',
      time: '32min',
      type: 'training'
    }
  ],
  upcomingEvents: [
    {
      id: '1',
      title: 'Health appointment',
      description: 'Dr Favour John',
      time: '9:00AM - 11:00',
      date: 'March 11',
      type: 'appointment'
    },
    {
      id: '2',
      title: 'Meeting with Dr Favour John',
      description: 'Follow-up session',
      time: '9:00AM - 10:00PM',
      date: 'March 12',
      type: 'meeting'
    },
    {
      id: '3',
      title: 'Meditation',
      description: 'Coach: Tim Bjorvik',
      time: '5:00PM - 6:00PM',
      date: 'Post workout sessions',
      type: 'session'
    }
  ],
  currentMonth: 'March',
  setCurrentMonth: (month) => set({ currentMonth: month }),
  goalProgress: 86,
  sleepHours: {
    value: 20,
    subtitle: '3:30 mins yesterday'
  }
}));