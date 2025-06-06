import React, { useEffect, useState } from 'react';

const PerformanceMonitor = ({ enabled = false }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    apiCalls: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    if (!enabled) return;

    const startTime = performance.now();
    let apiCallCount = 0;

    // Monitor API calls
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      apiCallCount++;
      setMetrics(prev => ({ ...prev, apiCalls: apiCallCount }));
      return originalFetch.apply(this, args);
    };

    // Monitor performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          setMetrics(prev => ({
            ...prev,
            loadTime: entry.loadEventEnd - entry.loadEventStart
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    // Monitor memory usage
    const updateMemory = () => {
      if (performance.memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)
        }));
      }
    };

    const memoryInterval = setInterval(updateMemory, 5000);

    return () => {
      window.fetch = originalFetch;
      observer.disconnect();
      clearInterval(memoryInterval);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs z-50">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>API Calls: {metrics.apiCalls}</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
    </div>
  );
};

export default PerformanceMonitor;
