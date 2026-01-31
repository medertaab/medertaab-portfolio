import { motion } from 'framer-motion';
import { Category } from '@component/types/portfolio';

interface CategorySwitcherProps {
  active: Category;
  onChange: (cat: Category) => void;
}

const CategorySwitcher: React.FC<CategorySwitcherProps> = ({ active, onChange }) => {
  const categories = Object.values(Category);

  return (
    <div className="flex flex-wrap gap-4 md:gap-12 items-center border-b border-brand-cream/10 pb-6 sticky top-0 z-40 bg-brand-black/90 backdrop-blur-xl pt-12">
      <div className="hidden md:block">
         <span className="text-[10px] font-black tracking-[0.3em] text-brand-cream/20 uppercase">SELECT ARCHIVE //</span>
      </div>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative py-2 text-sm font-bold tracking-[0.15em] transition-all uppercase ${
            active === cat ? 'text-brand-blue' : 'text-brand-cream/30 hover:text-brand-cream'
          }`}
        >
          {cat}
          {active === cat && (
            <motion.div 
              layoutId="activeTab"
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-blue"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default CategorySwitcher;
