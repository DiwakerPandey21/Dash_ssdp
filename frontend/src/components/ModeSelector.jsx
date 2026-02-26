const ModeSelector = ({ isContributor, setContributor }) => {
    return (
        <div className="flex bg-gray-200 rounded p-1 mb-6">
            <button
                className={`flex-1 py-2 text-center rounded ${!isContributor ? 'bg-white shadow text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setContributor(false)}
            >
                Viewer Mode
            </button>
            <button
                className={`flex-1 py-2 text-center rounded ${isContributor ? 'bg-white shadow text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setContributor(true)}
            >
                Contributor Mode
            </button>
        </div>
    );
};

export default ModeSelector;
