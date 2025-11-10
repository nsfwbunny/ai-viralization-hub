export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">Bem-vindo ao AI Viralization Hub!</p>
      
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded border p-4">
          <h2 className="font-bold">Módulos</h2>
          <p>6 módulos disponíveis</p>
        </div>
        
        <div className="rounded border p-4">
          <h2 className="font-bold">Templates</h2>
          <p>50+ templates prontos</p>
        </div>
        
        <div className="rounded border p-4">
          <h2 className="font-bold">Seu Plano</h2>
          <p>Starter</p>
        </div>
      </div>
    </div>
  );
}