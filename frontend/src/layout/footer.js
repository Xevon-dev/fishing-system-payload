export function footer({ text = '' } = {}) {
  return `
    <footer class="site-footer">
      <p>${text}</p>
    </footer>
  `
}
