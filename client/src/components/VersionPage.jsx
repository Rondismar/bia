import React, { useState, useEffect, useCallback } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

// Detecta o tipo de ambiente baseado no hostname
const detectEnvironment = (hostname) => {
  if (hostname === 'localhost' || hostname === '127.0.0.1') return 'Local';
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) return 'IP Direto';
  return 'Produção';
};

// Extrai informações do navegador do userAgent
const extractBrowser = (userAgent) => {
  if (/Chrome\//.test(userAgent) && !/Chromium\//.test(userAgent)) return 'Chrome';
  if (/Firefox\//.test(userAgent)) return 'Firefox';
  if (/Safari\//.test(userAgent) && !/Chrome\//.test(userAgent)) return 'Safari';
  if (/Edg\//.test(userAgent)) return 'Edge';
  const match = userAgent.match(/(\w+)\/[\d.]+\s*$/);
  return match ? match[1] : userAgent.slice(0, 40);
};

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

  // --- Dados de ambiente ---
  const loc = window.location;
  const envType = detectEnvironment(loc.hostname);
  const envBadgeMap = {
    Local: { label: 'Local', color: 'badge-env-local' },
    'IP Direto': { label: 'IP Direto', color: 'badge-env-ip' },
    'Produção': { label: 'Produção', color: 'badge-env-prod' },
  };
  const envBadge = envBadgeMap[envType];

  // --- Dados do cliente ---
  const browser = extractBrowser(navigator.userAgent);

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

      {/* Card 2 — Ambiente */}
      <div className="version-card">
        <div className="version-card-header">
          <span className="version-card-icon">🏠</span>
          <h3 className="version-card-title">Ambiente</h3>
          <span className={`version-badge ${envBadge.color}`}>{envBadge.label}</span>
        </div>
        <div className="version-card-body">
          <div className="version-field">
            <span className="version-field-label">Tipo</span>
            <span className="version-field-value">{envType}</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Protocolo</span>
            <span className="version-field-value version-field-mono">{loc.protocol}</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Host</span>
            <span className="version-field-value version-field-mono">{loc.hostname}</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Porta</span>
            <span className="version-field-value version-field-mono">
              {loc.port || (loc.protocol === 'https:' ? '443' : '80')}
            </span>
          </div>
          <div className="version-field">
            <span className="version-field-label">URL Completa</span>
            <span className="version-field-value version-field-mono version-field-break">
              {loc.href}
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 — Cliente */}
      <div className="version-card">
        <div className="version-card-header">
          <span className="version-card-icon">💻</span>
          <h3 className="version-card-title">Cliente</h3>
          <span className="version-badge badge-status-online">🟢 Ativo</span>
        </div>
        <div className="version-card-body">
          <div className="version-field">
            <span className="version-field-label">Aplicação</span>
            <span className="version-field-value">BIA Client</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Framework</span>
            <span className="version-field-value">React + Vite</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Navegador</span>
            <span className="version-field-value">{browser}</span>
          </div>
          <div className="version-field">
            <span className="version-field-label">Plataforma</span>
            <span className="version-field-value">{navigator.platform}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionPage;
