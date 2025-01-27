package com.timo.to_dolist2025;

import android.content.Context;
import android.content.SharedPreferences;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class TodoPreferences {
    private static final String PREF_NAME = "TodoPrefs";
    private static final String KEY_TODOS = "todos";
    private SharedPreferences prefs;
    private Gson gson;

    public TodoPreferences(Context context) {
        prefs = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        gson = new Gson();
    }

    public void saveTodos(List<Todo> todos) {
        SharedPreferences.Editor editor = prefs.edit();
        String json = gson.toJson(todos);
        editor.putString(KEY_TODOS, json);
        editor.apply();
    }

    public List<Todo> getTodos() {
        String json = prefs.getString(KEY_TODOS, null);
        if (json == null) {
            return new ArrayList<>();
        }
        Type type = new TypeToken<List<Todo>>(){}.getType();
        return gson.fromJson(json, type);
    }
}

