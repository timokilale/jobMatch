package com.timo.to_dolist2025;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

public class WeekFragment extends Fragment {
    private TodoPreferences todoPrefs;
    private TodoAdapter adapter;
    private ListView listView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_week, container, false);

        todoPrefs = new TodoPreferences(getContext());
        listView = view.findViewById(R.id.week_list);

        refreshData(); // Load data initially

        return view;
    }

    public void refreshData() {
        // Get all todos
        List<Todo> allTodos = todoPrefs.getTodos();

        // Filter for this week's todos
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.DAY_OF_WEEK, cal.getFirstDayOfWeek());
        Calendar endOfWeek = (Calendar) cal.clone();
        endOfWeek.add(Calendar.DAY_OF_WEEK, 6);

        List<Todo> weekTodos = allTodos.stream()
                .filter(todo -> {
                    Calendar todoDate = Calendar.getInstance();
                    todoDate.setTime(todo.getDatetime());
                    return !todoDate.before(cal) && !todoDate.after(endOfWeek);
                })
                .collect(Collectors.toList());

        // Update the adapter
        adapter = new TodoAdapter(getContext(), weekTodos);
        listView.setAdapter(adapter);

        // Set alarms for each todo
        for (Todo todo : weekTodos) {
            setAlarm(todo);
        }
    }

    private void setAlarm(Todo todo) {
        AlarmManager alarmManager = (AlarmManager) getContext().getSystemService(Context.ALARM_SERVICE);

        // Check if the app can schedule exact alarms (Android 12+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            if (!alarmManager.canScheduleExactAlarms()) {
                // Handle the case where the app cannot schedule exact alarms
                Toast.makeText(getContext(), "Exact alarm permission not granted", Toast.LENGTH_SHORT).show();
                requestExactAlarmPermission(); // Request permission
                return;
            }
        }

        Intent intent = new Intent(getContext(), AlarmReceiver.class);
        intent.putExtra("TODO_TITLE", todo.getTitle());

        PendingIntent pendingIntent = PendingIntent.getBroadcast(
                getContext(),
                todo.hashCode(),
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        try {
            alarmManager.setExact(
                    AlarmManager.RTC_WAKEUP,
                    todo.getDatetime().getTime(),
                    pendingIntent
            );
        } catch (SecurityException e) {
            // Handle the SecurityException
            Toast.makeText(getContext(), "Cannot schedule exact alarm: " + e.getMessage(), Toast.LENGTH_SHORT).show();
        }
    }

    private void requestExactAlarmPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            // Open the system settings to request the SCHEDULE_EXACT_ALARM permission
            Intent intent = new Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM);
            startActivity(intent);
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        // Check if the permission was granted while the app was in the background
        refreshData();
    }

    private void requestNotificationPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            requestPermissions(new String[]{android.Manifest.permission.POST_NOTIFICATIONS}, 1);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == 1) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Permission granted, proceed with showing notifications
            } else {
                // Permission denied, show a message to the user
                Toast.makeText(getContext(), "Notification permission denied", Toast.LENGTH_SHORT).show();
            }
        }
    }
}