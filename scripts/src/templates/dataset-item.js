export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  ${data.notes.slice(0, 150) || ''}
</dataset>`
)
