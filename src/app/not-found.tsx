/**
 * Render a component for displaying a "Not Found" message.
 *
 * @return {JSX.Element} A React component representing the "Not Found" message.
 */
export default function NotFound() {
  return (
    <div className="m-auto space-y-5 text-center">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p>Looks like this page doesn&apos;t exist.</p>
    </div>
  );
}
