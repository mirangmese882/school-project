import { create } from 'zustand';

const useStorage = create<{
  key: string;
  data: any;
} | null>((set) => ({
  key: '',
  data: null,
}));

export default function SchoolProject() {
  const [storage] = useStorage();
  
  return (
    <div>
      {storage?.data && (
        <>
          <h1>{storage.data.title}</h1>
          <p>{storage.data.content}</p>
        </>
      )}
      
      {!storage?.data && (
        <button onClick={() => set({ data: 'This is a new school project!' })}>Add Data</button>
      )}
    </div>
  );
}
