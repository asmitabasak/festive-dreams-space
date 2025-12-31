import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, X, Sparkles, ImagePlus } from 'lucide-react';

interface VisionItem {
  id: string;
  text: string;
  category: string;
  color: string;
}

const categories = [
  { name: 'Career', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30' },
  { name: 'Health', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30' },
  { name: 'Relationships', color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30' },
  { name: 'Personal Growth', color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30' },
  { name: 'Finance', color: 'from-primary/20 to-gold-light/20 border-primary/30' },
  { name: 'Adventure', color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30' },
];

const defaultItems: VisionItem[] = [
  { id: '1', text: 'Travel to 3 new countries', category: 'Adventure', color: 'from-sky-500/20 to-blue-500/20 border-sky-500/30' },
  { id: '2', text: 'Get promoted at work', category: 'Career', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30' },
  { id: '3', text: 'Run a marathon', category: 'Health', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30' },
  { id: '4', text: 'Learn a new language', category: 'Personal Growth', color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30' },
  { id: '5', text: 'Save $10,000', category: 'Finance', color: 'from-primary/20 to-gold-light/20 border-primary/30' },
  { id: '6', text: 'Strengthen family bonds', category: 'Relationships', color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30' },
];

const VisionBoard = () => {
  const [items, setItems] = useState<VisionItem[]>(defaultItems);
  const [newItem, setNewItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isAdding, setIsAdding] = useState(false);

  const addItem = () => {
    if (newItem.trim()) {
      const item: VisionItem = {
        id: Date.now().toString(),
        text: newItem,
        category: selectedCategory.name,
        color: selectedCategory.color,
      };
      setItems([...items, item]);
      setNewItem('');
      setIsAdding(false);
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Your Dreams</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">2025</span>{' '}
            <span className="text-gradient-gold">Vision Board</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualize your goals and dreams. Add your aspirations and watch them come to life.
          </p>
        </div>

        {/* Vision Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br ${item.color} border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-sm animate-scale-in`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
              <span className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-2 block">
                {item.category}
              </span>
              <p className="text-foreground font-medium text-lg">{item.text}</p>
            </div>
          ))}

          {/* Add New Item Card */}
          {isAdding ? (
            <div className="bg-gradient-card border border-border rounded-xl p-6 animate-scale-in">
              <div className="mb-4">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Enter your goal..."
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && addItem()}
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-xs rounded-full border transition-all ${
                      selectedCategory.name === cat.name
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-transparent text-muted-foreground border-border hover:border-primary/50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="gold" size="sm" onClick={addItem} className="flex-1">
                  Add Goal
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-primary/5 min-h-[160px] group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Add New Goal
              </span>
            </button>
          )}
        </div>

        {/* Inspiration Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-card border border-border/50 rounded-full px-6 py-3">
            <ImagePlus className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Pro tip: Add images to your vision board for stronger visualization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionBoard;
