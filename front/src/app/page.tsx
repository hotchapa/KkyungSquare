import HomeEvent from '@/common/components/home-event';


export default function Home({ children }: Readonly<{
  children: React.ReactNode}>){
  return (
    <main>
        {children}
    </main>
  );
}