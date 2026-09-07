import React, { useState, useEffect, useCallback } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const VersionPage = () => {
  const [apiStatus, setApiStatus] = useState('checking'); // 'online' | 'offline' | 'checking'
  const [apiData, setApiData] = useState(null);
  const [lastCheck, setLastCheck] = useState(null);

  const checkApi = useCallback(async () => {
    setApiStatus('checking');
    try {
      const res = await fetch(`${apiUrl}/api/versao`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setApiData(data);
      setApiStatus('online');
    } catch {
      setApiStatus('offline');
    } finally {
      setLastCheck(new Date());
    }
  }, []);

  useEffect(() => {
    checkApi();
  }, [checkApi]);

  // --- Badge da API ---
  const apiBadge =
    apiStatus === 'online'
      ? { icon: '🟢', label: 'Online', cls: 'badge-status-online' }
      : apiStatus === 'offline'
      ? { icon: '🔴', label: 'Offline', cls: 'badge-status-offline' }
      : { icon: '🟡', label: 'Verificando…', cls: 'badge-status-checking' };

  return (
    <div className="version-page">
      {/* Cabeçalho da página */}
      <div className="version-page-header">
        <h2 className="version-page-title">Informações de Versão</h2>
        <button className="btn version-refresh-btn" onClick={checkApi}>
          🔄 Atualizar
        </button>
      </div>

      {/* Card 1 — Status da API */}
      <div className="version-card">
        <div className="version-card-header">
          <span className="version-card-icon">🔧</span>
          <h3 className="version-card-title">Status da API</h3>
          <span className={`version-badge ${apiBadge.cls}`}>
            {apiBadge.icon} {apiBadge.label}
          </span>
        </div>
        <div className="version-card-body">
          <div className="version-field">
            <span className="version-field-label">Versão</span>
            <span className="version-field-value">
              {apiData ? `${apiData.app || 'BIA'} ${apiData.versao || '—'}` : '—'}
            </span>
          </div>
          <div className="version-field">
            <span className="version-field-label">URL</span>
            <span className="version-field-value version-field-mono">{apiUrl}</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Última verificação</span>
            <span className="version-field-value">
              {lastCheck ? lastCheck.toLocaleString() : '—'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionPage;
