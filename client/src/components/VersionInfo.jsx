import React, { useState, useEffect } from 'react';

const VersionInfo = () => {
  const [showVersion, setShowVersion] = useState(false);
  const [apiData, setApiData] = useState({ app: 'BIA', versao: '4.3.0' });

  useEffect(() => {
    fetch('/api/versao')
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch(() => {});
  }, []);

  const openVersionEndpoint = () => {
    window.open('/api/versao', '_blank');
  };

  return (
    <div className="version-info">
      <button
        className="version-trigger"
        onClick={() => setShowVersion(!showVersion)}
        title="Versão da aplicação"
      >
        🟢
      </button>
      {showVersion && (
        <div className="version-tooltip">
          <div className="version-content">
            <strong>{apiData.app} {apiData.versao}</strong>
            <div className="version-details">
              <small>
                <button className="version-link" onClick={openVersionEndpoint}>
                  🔗 /api/versao
                </button>
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VersionInfo;
