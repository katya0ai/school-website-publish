(function () {
  var phone = "256754971037";
  var forms = document.querySelectorAll(".whatsapp-form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var subject = form.getAttribute("data-whatsapp-subject") || "Website message";
      var lines = [subject, ""];
      var fields = form.querySelectorAll("input, select, textarea");

      fields.forEach(function (field) {
        if (!field.name) return;
        if ((field.type === "checkbox" || field.type === "radio") && !field.checked) return;

        var label = field.closest("label");
        var labelText = label ? label.textContent.replace(/\s+/g, " ").trim() : field.name;
        labelText = labelText.replace(field.value || "", "").trim();

        var value = field.type === "checkbox" ? "Yes" : field.value;
        if (!value) return;

        lines.push(labelText + ": " + value);
      });

      window.location.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(lines.join("\n"));
    });
  });
})();
