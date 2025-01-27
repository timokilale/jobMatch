package com.timo.to_dolist2025;

import android.os.Bundle;
import android.view.MenuItem;
import android.view.Menu;

import com.timo.to_dolist2025.R;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.navigation.NavigationView;

import androidx.annotation.NonNull;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.fragment.NavHostFragment;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;
import androidx.appcompat.app.AppCompatActivity;

import com.timo.to_dolist2025.databinding.ActivityMainBinding;
import com.timo.to_dolist2025.R;
import android.os.Bundle;
import android.view.MenuItem;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import com.google.android.material.navigation.NavigationView;

public class MainActivity extends AppCompatActivity {
    private DrawerLayout drawer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("Todo List");

        drawer = findViewById(R.id.drawer_layout);
        NavigationView navigationView = findViewById(R.id.nav_view);

        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        navigationView.setNavigationItemSelectedListener(item -> {
            Fragment selectedFragment = null;
            String title = "";

            int itemId = item.getItemId();
            if (itemId == R.id.nav_today) {
                selectedFragment = new TodayFragment();
                title = "Today";
            } else if (itemId == R.id.nav_week) {
                selectedFragment = new WeekFragment();
                title = "This Week";
            } else if (itemId == R.id.nav_month) {
                selectedFragment = new MonthFragment();
                title = "This Month";
            }

            if (selectedFragment != null) {
                getSupportActionBar().setTitle(title);
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.fragment_container, selectedFragment)
                        .commit();
            }

            drawer.closeDrawer(GravityCompat.START);
            return true;
        });

        // Set default fragment
        if (savedInstanceState == null) {
            getSupportFragmentManager()
                    .beginTransaction()
                    .replace(R.id.fragment_container, new TodayFragment())
                    .commit();
            navigationView.setCheckedItem(R.id.nav_today);
        }
    }

    @Override
    public void onBackPressed() {
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    public void refreshCurrentFragment() {
        // Get the currently displayed fragment
        Fragment currentFragment = getSupportFragmentManager().findFragmentById(R.id.fragment_container);

        // Check the type of the fragment and refresh its data
        if (currentFragment instanceof TodayFragment) {
            ((TodayFragment) currentFragment).refreshData();
        } else if (currentFragment instanceof WeekFragment) {
            ((WeekFragment) currentFragment).refreshData();
        } else if (currentFragment instanceof MonthFragment) {
            ((MonthFragment) currentFragment).refreshData();
        }
    }
}