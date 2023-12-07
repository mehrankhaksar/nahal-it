export default function Template({ children }) {
  return (
    <main className="w-full text-primary-foreground bg-primary p-5 rounded-2xl">
      {children}
    </main>
  );
}
