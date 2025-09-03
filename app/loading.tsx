export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-200 dark:bg-gray-800 flex justify-center items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 dark:border-gray-100" />
    </div>
  );
}
