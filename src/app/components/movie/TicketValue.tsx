export default function TicketValue({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold text-black leading-snug">
      {children}
    </p>
  );
}
