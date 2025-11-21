'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Video,
    TrendingUp,
    Settings,
    LogOut,
    Crown
} from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Video, label: 'Meus Templates', href: '/dashboard/templates' },
    { icon: TrendingUp, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Settings, label: 'Configurações', href: '/dashboard/settings' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col">
            <div className="p-8">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    ViralHub
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <div className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${isActive
                                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}
              `}>
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full"
                                    />
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 mb-4">
                    <div className="flex items-center gap-2 mb-2 text-indigo-300">
                        <Crown size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Plano Pro</span>
                    </div>
                    <p className="text-xs text-indigo-200/70 mb-3">Acesso ilimitado a todos os recursos.</p>
                    <button className="w-full py-2 text-xs font-bold bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                        Gerenciar Assinatura
                    </button>
                </div>

                <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Sair</span>
                </button>
            </div>
        </aside>
    );
}
