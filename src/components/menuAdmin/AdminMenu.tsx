'use client';

const AdminMenu = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white w-64 h-full rounded-sm">
      <ul className="flex flex-col p-4 space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#informazioni-generali">Informazioni generali</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#preferenze">Preferenze</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#altro-link">Altro Link</a>
        </li>
      </ul>
    </nav>
  
    </div>
  );
};

export default AdminMenu;