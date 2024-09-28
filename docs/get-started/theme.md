#### 1. Instalando Componentes do Shadcn via Terminal

Para instalar componentes do Shadcn, você deve seguir os seguintes passos:

1. Navegue até o site [Shadcn UI](https://ui.shadcn.com/docs/components) e escolha o componente desejado.
2. Use o comando fornecido na documentação para adicionar o componente ao seu projeto. Por exemplo:
   ```sh
   npx shadcn-ui@latest add accordion
   ```
3. Note que alguns componentes são combinações de outros. Por exemplo, para usar o `combobox`, você pode precisar instalar `command` e `dialog`:
   ```sh
   npx shadcn-ui@latest add command
   npx shadcn-ui@latest add dialog
   ```

#### 2. Configuração do Tailwind

A configuração do Tailwind pode ser realizada através do arquivo `tailwind.config.ts`. Siga as instruções das [documentações do Tailwind](https://tailwindcss.com/docs/configuration) para configurar adequadamente o seu ambiente. No entanto, tenha cuidado ao sobrescrever as configurações existentes, pois algumas delas são específicas para a configuração inicial do Shadcn. Aqui está um exemplo de configuração:

```typescript
import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

#### 3. Globals.css e Layers

No arquivo `globals.css`, você deve definir todas as cores padrão e usar as camadas (`@layer`) do Tailwind (`components`, `utilities` e `base`) conforme necessário. Exemplo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(222.2 84% 4.9%);
    /* Outras variáveis de cor */
  }

  .dark {
    --background: hsl(222.2 84% 4.9%);
    --foreground: hsl(210 40% 98%);
    /* Outras variáveis de cor */
  }
}

@layer base {
  * {
    @apply border-border [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .v-stack {
    @apply flex flex-col items-start;
  }

  .h-stack {
    @apply flex items-center;
  }

  .animate {
    @apply transition-all duration-200 ease-in-out;
  }

  .no-scrollbar::-webkit-scrollbar {
    @apply hidden;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
```

Obs: Exemplos de Situações para Usar Cada Camada do Tailwind CSS

#### Base Layer

A camada `base` é ideal para definir estilos globais que serão aplicados a todos os elementos do site. Situações comuns incluem:

- **Resets de Estilo:** Aplicar resets CSS globais para garantir uma aparência consistente entre diferentes navegadores.
- **Estilização de Tipografia Global:** Definir estilos de fontes, tamanhos e cores para elementos como `<h1>`, `<h2>`, `<p>`, etc.
- **Configuração de Estilos Padrão:** Estabelecer cores de fundo e de texto para o corpo do documento, garantindo um ponto de partida consistente para o design do site.

#### Components Layer

A camada `components` é utilizada para criar estilos de componentes reutilizáveis que podem ser usados em várias partes do site. Exemplos incluem:

- **Botões:** Definir estilos para diferentes tipos de botões, como primário, secundário e desativado.
- **Cartões:** Criar estilos para cartões de conteúdo que podem ser usados em seções como blogs, produtos ou perfis de usuário.
- **Formulários:** Estilizar formulários de entrada, incluindo campos de texto, caixas de seleção e botões de envio, para manter uma aparência uniforme.

#### Utilities Layer

A camada `utilities` é apropriada para criar classes de utilitários pequenas e específicas que são aplicadas diretamente aos elementos para ajustes rápidos. Situações incluem:

- **Espaçamento:** Adicionar margens, preenchimentos ou espaços personalizados entre elementos.
- **Visibilidade:** Criar utilitários para controlar a visibilidade de elementos, como `hidden` ou `visible`.
- **Efeitos:** Adicionar efeitos como sombras, filtros de imagem ou ajustes de opacidade que precisam ser aplicados rapidamente a elementos individuais.
- **Agrupamento de estilos:** Agrupar estilos diferentes, como é o caso do `h-stack` e `v-stack`.

Essas práticas ajudam a manter o código CSS organizado e eficiente, permitindo fácil manutenção e escalabilidade do projeto.

#### 4. clsx/cn

Para trabalhar com valores dinâmicos no Tailwind, use a biblioteca `clsx`, que está exportada como `cn` no seu boilerplate. O `clsx` facilita a criação de classes dinâmicas. Por exemplo:

```typescript
import clsx from 'clsx';

// Uso básico
const buttonClass = clsx('btn', {
  'btn-primary': isPrimary,
  'btn-secondary': !isPrimary,
});

// No seu projeto, você pode importar como 'cn'
import { cn } from '@/lib/utils';

const buttonClass = cn('btn', {
  'btn-primary': isPrimary,
  'btn-secondary': !isPrimary,
});
```

#### 5. CVA para Criar Variantes

A biblioteca `class-variance-authority` (CVA) ajuda a criar variantes de classes. Por exemplo, para botões, você pode definir variantes de tamanho e estilo:

```typescript
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
```

Após criar sua variante, busque o componente referente e inicialize seu CVA dentro do className. Obs: Fique atento a tipagem!

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

Essa configuração permite usar as variantes nos componentes de forma dinâmica e consistente.
