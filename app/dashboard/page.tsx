'use client';

import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  TrendingUp,
  Users,
  Eye,
  DollarSign,
  ArrowUpRight
} from 'lucide-react';
import GlassCard from '@/app/components/ui/GlassCard';

const data = [
  { name: 'Seg', value: 4000 },
  { name: 'Ter', value: 3000 },
  { name: 'Qua', value: 2000 },
  { name: 'Qui', value: 2780 },
  { name: 'Sex', value: 1890 },
  { name: 'Sab', value: 2390 },
  { name: 'Dom', value: 3490 },
];

const stats = [
  {
    title: 'Receita Total',
    value: 'R$ 12.450',
    change: '+12.5%',
    icon: DollarSign,
    color: 'text-emerald-400'
  },
  {
    title: 'Visualizações',
    value: '45.2K',
    change: '+8.2%',
    icon: Eye,
    color: 'text-blue-400'
  },
  {
    title: 'Novos Seguidores',
    value: '1.2K',
    change: '+2.4%',
    icon: Users,
    color: 'text-purple-400'
  },
  {
    title: 'Taxa de Viralização',
    value: '85%',
    change: '+5.1%',
    icon: TrendingUp,
    color: 'text-pink-400'
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Bem-vindo de volta, T-GAMER</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
          <ArrowUpRight size={20} />
          Novo Projeto
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <GlassCard key={index} className="flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Main Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 min-h-[400px]">
          <h2 className="text-xl font-bold text-white mb-6">Performance Viral</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="#ffffff50"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#ffffff50"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `R$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(5, 5, 5, 0.8)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6">Top Templates</h2>
          <div className="space-y-4 flex-1 overflow-y-auto pr-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center text-lg font-bold text-gray-500 group-hover:text-white transition-colors">
                  #{i}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors">Luxury Lifestyle {i}</h4>
                  <p className="text-xs text-gray-500">2.4k Downloads</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">R$ 49</p>
                  <p className="text-xs text-emerald-400">+12%</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-sm font-bold text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded-xl transition-all">
            Ver Todos
          </button>
        </GlassCard>
      </div>
    </div>
  );
}