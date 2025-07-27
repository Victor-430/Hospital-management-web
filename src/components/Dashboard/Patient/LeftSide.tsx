import { MedicationCard } from "./MedicationCard";
import { StatsCard } from "./StatsCard";
import { UpcomingAppointments } from "./UpcomingAppointments";

export const LeftSide = () => {
  return (
    <div className="space-y-4">
      <StatsCard />

      <UpcomingAppointments />

      <MedicationCard />
    </div>
  );
};
