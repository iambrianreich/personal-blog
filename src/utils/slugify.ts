export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'ai-agentic-coding': 'AI / Agentic Coding',
    'security': 'Security',
    'business': 'Business',
    'engineering-management': 'Engineering Management',
    'book-reviews': 'Book Reviews',
    'agile-devops': 'Agile / DevOps',
    'frontend': 'Frontend',
    'uncategorized': 'Uncategorized',
  };
  return labels[category] || category;
}
