export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">AI Viralization Hub</h1>
      <p className="mt-4 text-xl">Sistema Completo de Viralização com IA</p>
      
      <div className="mt-8 flex gap-4">
        <a 
          href="/auth/login"
          className="rounded bg-blue-500 px-6 py-3 text-white"
        >
          Entrar
        </a>
        
        <a 
          href="/auth/register"
          className="rounded border border-blue-500 px-6 py-3"
        >
          Registrar
        </a>
      </div>
    </div>
  );
}