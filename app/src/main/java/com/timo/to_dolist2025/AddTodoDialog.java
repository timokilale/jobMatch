package com.timo.to_dolist2025;

import android.app.AlertDialog;
import android.app.Dialog;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TimePicker;
import androidx.fragment.app.DialogFragment;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class AddTodoDialog extends DialogFragment {
    private TodoPreferences todoPrefs;

    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        LayoutInflater inflater = requireActivity().getLayoutInflater();
        View view = inflater.inflate(R.layout.dialog_add_todo, null);

        EditText titleInput = view.findViewById(R.id.input_title);
        EditText descInput = view.findViewById(R.id.input_description);
        DatePicker datePicker = view.findViewById(R.id.date_picker);
        TimePicker timePicker = view.findViewById(R.id.time_picker);

        todoPrefs = new TodoPreferences(getContext());

        builder.setView(view)
                .setTitle("Add New Todo")
                .setPositiveButton("Add", (dialog, id) -> {
                    Calendar calendar = Calendar.getInstance();
                    calendar.set(
                            datePicker.getYear(),
                            datePicker.getMonth(),
                            datePicker.getDayOfMonth(),
                            timePicker.getHour(),
                            timePicker.getMinute()
                    );

                    Todo newTodo = new Todo(
                            titleInput.getText().toString(),
                            descInput.getText().toString(),
                            calendar.getTime()
                    );

                    List<Todo> todos = todoPrefs.getTodos();
                    todos.add(newTodo);
                    todoPrefs.saveTodos(todos);

                    // Refresh the current fragment
                    if (getActivity() instanceof MainActivity) {
                        ((MainActivity) getActivity()).refreshCurrentFragment();
                    }
                })
                .setNegativeButton("Cancel", (dialog, id) -> {
                    AddTodoDialog.this.getDialog().cancel();
                });

        return builder.create();
    }
}