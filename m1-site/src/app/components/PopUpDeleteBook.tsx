import React from 'react';
import '../App.css'; // Assurez-vous que le fichier CSS est bien importé


const ConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Êtes-vous sûr de vouloir supprimer ce livre ?</h2>
        <div className="flex justify-end">
          <button onClick={onCancel} className="mr-2 px-4 py-2 bg-gray-200 rounded">
            Annuler
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
