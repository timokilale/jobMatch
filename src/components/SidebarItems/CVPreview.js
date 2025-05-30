import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvData } from '../../redux/slices/cvSlice';
import DownloadButton from './Downloadbutton';

const CVPreview = ({ applicantId }) => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(state => state.cv);

  console.log('=== CV PREVIEW DEBUG ===');
  console.log('Received applicantId prop:', applicantId);
  console.log('CV state:', cv);
  console.log('Loading state:', loading);
  console.log('Error state:', error);

  useEffect(() => {
    if (applicantId) {
      console.log('Dispatching fetchCvData with ID:', applicantId);
      dispatch(fetchCvData(applicantId));
    } else {
      console.log('No applicantId provided to useEffect');
    }
  }, [dispatch, applicantId]);

  // Helper function to safely render error messages
  const safeRenderError = (error) => {
    if (!error) return '';
    if (typeof error === 'string') return error;
    if (typeof error === 'object') {
      if (error.message) return error.message;
      if (error.error) return error.error;
      // Better handling for empty objects
      const errorStr = JSON.stringify(error);
      if (errorStr === '{}') return 'An unknown error occurred';
      return errorStr;
    }
    return String(error);
  };

  if (loading) return <p>Loading CV...</p>;
  if (error) return <p>Error: {safeRenderError(error)}</p>;
  if (!cv) return <p>No CV data found.</p>;

  // Helper function to safely render values
  const safeRender = (value) => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'object') {
      // Handle empty objects
      if (Object.keys(value).length === 0) return 'N/A';
      return JSON.stringify(value);
    }
    return String(value);
  };

  // Add comprehensive logging to identify the problematic field
  console.log('=== DETAILED CV STRUCTURE ===');
  console.log('cv.fullName type:', typeof cv.fullName, 'value:', cv.fullName);
  console.log('cv.user type:', typeof cv.user, 'value:', cv.user);
  console.log('cv.nida type:', typeof cv.nida, 'value:', cv.nida);
  console.log('cv.qualifications type:', typeof cv.qualifications, 'length:', cv.qualifications?.length);
  console.log('cv.experiences type:', typeof cv.experiences, 'length:', cv.experiences?.length);
  console.log('cv.languages type:', typeof cv.languages, 'length:', cv.languages?.length);
  console.log('cv.skills type:', typeof cv.skills, 'length:', cv.skills?.length);
  console.log('cv.categories type:', typeof cv.categories, 'length:', cv.categories?.length);

  return (
    <div className="bg-white p-6 rounded shadow w-full mt-32">
      <h2 className="text-2xl font-bold ">{safeRender(cv?.fullName)}</h2>
      <p className="text-sm text-gray-600 mb-4">
        {safeRender(cv?.user?.email || cv?.email)} | NIDA: {safeRender(cv?.nida)}
      </p>

      <div className="space-y-3">
        <section>
          <h3 className="font-semibold text-lg mb-1">Academic Qualifications</h3>
          {Array.isArray(cv?.qualifications) && cv.qualifications.length > 0 ? (
            cv.qualifications.map((q, index) => (
              <p key={q?.id || index}>
                {safeRender(q?.level)} in {safeRender(q?.fieldOfStudy)} - {safeRender(q?.institution)}
              </p>
            ))
          ) : (
            <p>No qualifications found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Work Experience</h3>
          {Array.isArray(cv?.experiences) && cv.experiences.length > 0 ? (
            cv.experiences.map((e, index) => (
              <div key={e?.id || index}>
                <p>{safeRender(e?.jobTitle)} at {safeRender(e?.institution)}</p>
                <p className="text-sm text-gray-500">{safeRender(e?.duties)}</p>
              </div>
            ))
          ) : (
            <p>No work experience found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Languages</h3>
          {Array.isArray(cv?.languages) && cv.languages.length > 0 ? (
            cv.languages.map((l, index) => (
              <p key={l?.id || index}>
                {safeRender(l?.language)}: Speak - {safeRender(l?.speak)}, Read - {safeRender(l?.read)}, Write - {safeRender(l?.write)}
              </p>
            ))
          ) : (
            <p>No languages found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Computer Skills</h3>
          {Array.isArray(cv?.skills) && cv.skills.length > 0 ? (
            cv.skills.map((s, index) => (
              <p key={s?.id || index}>{safeRender(s?.skill)} - {safeRender(s?.proficiency)}</p>
            ))
          ) : (
            <p>No computer skills found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Preferred Categories</h3>
          {Array.isArray(cv?.categories) && cv.categories.length > 0 ? (
            cv.categories.map((c, index) => <p key={c?.id || index}>{safeRender(c?.name)}</p>)
          ) : (
            <p>No categories found</p>
          )}
        </section>
      </div>

      <div className="mt-6">
        <DownloadButton applicantId={cv?.id || applicantId} />
      </div>
    </div>
  );
};

export default CVPreview;