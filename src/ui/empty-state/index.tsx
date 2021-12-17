export function EmptyState({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
      }}>
      <img src="placeholder.svg" alt="placeholder" width="240px" />
      <br />
      <h3>{text}</h3>
    </div>
  )
}
