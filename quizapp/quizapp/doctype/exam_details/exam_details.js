frappe.ui.form.on("Exam Details", "end_time", function(frm) {
  console.log(cur_frm.doc.passing_marks);
  console.log(frappe.datetime.nowdate());

  if (cur_frm.doc.end_time < cur_frm.doc.start_time)
  {
  frm.set_value("end_time","")
    msgprint(__("End time can't be less than Start Time"));
  }

});
frappe.ui.form.on("Exam Details", "date", function(frm) {
  console.log(cur_frm.doc.passing_marks);
  console.log(frappe.datetime.nowdate());

  if (cur_frm.doc.date < frappe.datetime.nowdate())
  {
  frm.set_value("date","")
    msgprint(__("Date can't be less than Today's date"));
  }

});
