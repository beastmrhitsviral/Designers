export type ViewId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface StackEntry {
  viewNumber: ViewId;
  title: string;
  subtitle?: string;
  params?: Record<string, any>;
}

export const INITIAL_STACK: StackEntry[] = [
  {
    viewNumber: 1,
    title: 'AG Architects & Interior Designers',
    subtitle: 'Kalyan Vihar, Delhi'
  }
];

export const VIEW_TITLES: Record<ViewId, { title: string; subtitle: string }> = {
  1: { title: 'AG Architects & Interior Designers', subtitle: 'Kalyan Vihar, Delhi' },
  2: { title: 'Search Interior Catalog', subtitle: 'Delhi Rates & Portfolios' },
  3: { title: 'Modular Kitchen Studio', subtitle: 'German Finishes & Layout Plans' },
  4: { title: 'Luxury Living & Bedroom Suites', subtitle: 'Modern, Minimalist & Classical' },
  5: { title: 'Commercial Workspace Planning', subtitle: 'Corporate Hubs Delhi NCR' },
  6: { title: 'Verified Google Client Reviews', subtitle: '4.9 ★ (63 Verified Reviews)' },
  7: { title: 'Live Location & GPS Navigation', subtitle: 'Rana Pratap Bagh, Kalyan Vihar' },
  8: { title: 'Materials & Finishes Gallery', subtitle: 'Veneers, Marbles & Per Sq.Ft Matrix' }
};

export function pushView(
  currentStack: StackEntry[],
  viewNumber: ViewId,
  params?: Record<string, any>
): StackEntry[] {
  // If the top view is already this view, do not duplicate
  const top = currentStack[currentStack.length - 1];
  if (top && top.viewNumber === viewNumber) {
    return currentStack;
  }

  const meta = VIEW_TITLES[viewNumber];
  const newEntry: StackEntry = {
    viewNumber,
    title: meta.title,
    subtitle: meta.subtitle,
    params
  };

  return [...currentStack, newEntry];
}

export function popView(currentStack: StackEntry[]): StackEntry[] {
  if (currentStack.length <= 1) {
    return currentStack;
  }
  return currentStack.slice(0, currentStack.length - 1);
}

export function resetToHome(): StackEntry[] {
  return [...INITIAL_STACK];
}

export function canGoBack(stack: StackEntry[]): boolean {
  return stack.length > 1;
}

export function getActiveView(stack: StackEntry[]): StackEntry {
  return stack[stack.length - 1] || INITIAL_STACK[0];
}
