/* Lead click tracking: WhatsApp, call and email taps. Sends to dataLayer (GTM) and gtag (GA4) if present. */
(function () {
    function send(type, el) {
        var label = (el.getAttribute('href') || '').slice(0, 120);
        var page = location.pathname;
        try { (window.dataLayer = window.dataLayer || []).push({ event: 'lead_click', lead_type: type, lead_label: label, lead_page: page }); } catch (e) {}
        try { if (window.gtag) window.gtag('event', 'lead_click', { lead_type: type, lead_label: label, page_path: page }); } catch (e) {}
    }
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href]');
        if (!a) return;
        var h = a.getAttribute('href') || '';
        if (h.indexOf('wa.me') > -1 || h.indexOf('api.whatsapp.com') > -1) send('whatsapp', a);
        else if (h.indexOf('tel:') === 0) send('call', a);
        else if (h.indexOf('mailto:') === 0) send('email', a);
    }, true);
})();
